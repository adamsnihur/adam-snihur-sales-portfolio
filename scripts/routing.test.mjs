import assert from "node:assert/strict";
import test from "node:test";
import { getFocusTarget, getRouteTitle } from "../src/routeEffects.ts";
import { parseHash } from "../src/routing.ts";

test("parseHash handles home, knowledge, article, and invalid hashes", () => {
  const cases = [
    ["", { kind: "home" }],
    ["#kontakt", { kind: "home" }],
    ["#/wiedza", { kind: "knowledge-index" }],
    ["#/narzedzia", { kind: "tools-index" }],
    ["#/wiedza/discovery-przed-oferta", { kind: "article", slug: "discovery-przed-oferta" }],
    ["#/wiedza/", { kind: "not-found" }],
    ["#/nieznane", { kind: "not-found" }],
    ["#/wiedza/%E0%A4%A", { kind: "not-found" }],
    ["#/wiedza/zażółć", { kind: "not-found" }],
    ["#/wiedza/  batna-zopa-ustepstwa  ", { kind: "article", slug: "batna-zopa-ustepstwa" }],
  ];

  for (const [hash, expected] of cases) {
    assert.deepEqual(parseHash(hash), expected, hash || "empty hash");
  }
});

test("getRouteTitle returns the title for every route outcome", () => {
  assert.equal(getRouteTitle({ kind: "home" }), "Adam Śnihur | Sprzedaż B2B");
  assert.equal(getRouteTitle({ kind: "knowledge-index" }), "Wiedza sprzedażowa | Adam Śnihur");
  assert.equal(getRouteTitle({ kind: "tools-index" }), "Narzędzia sprzedażowe | Adam Śnihur");
  assert.equal(
    getRouteTitle({ kind: "article", slug: "fake-slug" }, "Testowy artykuł"),
    "Testowy artykuł | Adam Śnihur",
  );
  assert.equal(
    getRouteTitle({ kind: "article", slug: "missing" }),
    "Nie znaleziono strony | Adam Śnihur",
  );
  assert.equal(getRouteTitle({ kind: "not-found" }), "Nie znaleziono strony | Adam Śnihur");
});

test("getFocusTarget selects and scrolls initial and cross-view home anchors", () => {
  const heading = { name: "knowledge heading" };
  const section = {
    querySelector(selector) {
      assert.equal(selector, "h1, h2, h3, [tabindex]");
      return heading;
    },
  };
  const documentFake = {
    getElementById(id) {
      assert.equal(id, "wiedza");
      return section;
    },
    querySelector() {
      assert.fail("page selector must not be used for a home anchor");
    },
  };

  assert.deepEqual(
    getFocusTarget(documentFake, { kind: "home" }, "#wiedza", true),
    { element: heading, scrollTarget: section },
  );
  assert.deepEqual(
    getFocusTarget(documentFake, { kind: "home" }, "#wiedza", false),
    { element: heading, scrollTarget: section },
  );
});

test("getFocusTarget preserves normal anchors and page focus decisions", () => {
  const contact = { querySelector: () => null };
  const pageHeading = { name: "page heading" };
  const documentFake = {
    getElementById(id) {
      return id === "kontakt" ? contact : null;
    },
    querySelector(selector) {
      assert.equal(selector, "main h1, main");
      return pageHeading;
    },
  };

  assert.deepEqual(
    getFocusTarget(documentFake, { kind: "home" }, "#kontakt", false),
    { element: contact, scrollTarget: contact },
  );
  assert.equal(getFocusTarget(documentFake, { kind: "home" }, "", true), null);
  assert.deepEqual(
    getFocusTarget(documentFake, { kind: "knowledge-index" }, "#/wiedza", false),
    { element: pageHeading, scrollTarget: null },
  );
});
