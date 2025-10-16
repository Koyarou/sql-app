// coi-serviceworker.js — MIT (https://github.com/gzuidhof/coi-serviceworker)
if (typeof window === "undefined") {
  const addHeaders = (headers) => {
    headers.set("Cross-Origin-Opener-Policy", "same-origin");
    headers.set("Cross-Origin-Embedder-Policy", "require-corp");
    return headers;
  };
  self.addEventListener("install", () => self.skipWaiting());
  self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
  self.addEventListener("fetch", (event) => {
    const req = event.request;
    const mode = req.mode;
    if (mode === "navigate" || (mode === "no-cors" && req.destination === "script") || req.destination === "serviceworker") {
      event.respondWith(
        (async () => {
          const r = await fetch(req);
          const h = addHeaders(new Headers(r.headers));
          return new Response(r.body, { status: r.status, statusText: r.statusText, headers: h });
        })()
      );
    }
  });
} else {
  // Register SW on page load
  (function () {
    if (window.crossOriginIsolated) return; // already OK
    if (!("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("./coi-serviceworker.js", { type: "classic" }).then(() => {
      location.reload();
    });
  })();
}
