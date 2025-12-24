(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    1617: (e) => {
      e.exports = {
        style: {
          fontFamily: "'Bubblegum Sans', 'Bubblegum Sans Fallback'",
          fontWeight: 400,
          fontStyle: "normal",
        },
        className: "__className_1f89b7",
      };
    },
    2020: (e, t, s) => {
      Promise.resolve().then(s.bind(s, 3414));
    },
    3414: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, { default: () => h });
      var r = s(5155),
        a = s(1617),
        n = s.n(a);
      s(9324);
      var l = s(2115);
      let o =
        "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x6927c51e1d97298c795ea79464e2ef32255737a9";
      function i() {
        let [e, t] = (0, l.useState)(!1);
        return (0, r.jsxs)("div", {
          className: "md:hidden",
          children: [
            (0, r.jsx)("button", {
              onClick: () => t(!e),
              className: "text-white focus:outline-none",
              children: (0, r.jsx)("svg", {
                className: "w-6 h-6",
                fill: "none",
                stroke: "currentColor",
                viewBox: "0 0 24 24",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0, r.jsx)("path", {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  d: e ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16",
                }),
              }),
            }),
            e &&
              (0, r.jsx)("div", {
                className:
                  "absolute top-16 left-0 w-full bg-peek-green shadow-lg z-10",
                children: (0, r.jsxs)("nav", {
                  className: "flex flex-col items-center space-y-4 py-4",
                  children: [
                    (0, r.jsx)("a", {
                      href: "#home",
                      className: "text-white hover:text-gray-300",
                      onClick: () => t(!1),
                      children: "home",
                    }),
                    (0, r.jsx)("a", {
                      href: "#about",
                      className: "text-white hover:text-gray-300",
                      onClick: () => t(!1),
                      children: "about",
                    }),
                    (0, r.jsx)("a", {
                      href: "#tokenomics",
                      className: "text-white hover:text-gray-300",
                      onClick: () => t(!1),
                      children: "tokenomics",
                    }),
                    (0, r.jsx)("a", {
                      href: "#roadmap",
                      className: "text-white hover:text-gray-300",
                      onClick: () => t(!1),
                      children: "roadmap",
                    }),
                    (0, r.jsx)("a", {
                      href: "#how-to-buy",
                      className: "text-white hover:text-gray-300",
                      onClick: () => t(!1),
                      children: "how to buy",
                    }),
                    (0, r.jsx)("a", {
                      href: "#chart",
                      className: "text-white hover:text-gray-300",
                      onClick: () => t(!1),
                      children: "chart",
                    }),
                    (0, r.jsx)("a", {
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      onClick: () => t(!1),
                      className: "w-full flex justify-center",
                      children: (0, r.jsx)("button", {
                        className:
                          "bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full",
                        children: "BUY NOW",
                      }),
                    }),
                  ],
                }),
              }),
          ],
        });
      }
      function h(e) {
        let { children: t } = e;
        return (0, r.jsx)("html", {
          lang: "en",
          children: (0, r.jsxs)("body", {
            className: "".concat(n().className, " antialiased"),
            children: [
              (0, r.jsxs)("header", {
                className: "flex justify-between items-center px-6 py-4",
                children: [
                  (0, r.jsxs)("div", {
                    className: "text-4xl font-bold flex items-center",
                    children: [
                      (0, r.jsx)("img", {
                        src: "/peeklogo.png",
                        alt: "PeekCoin Logo",
                        className: "h-24 mr-1",
                      }),
                      "$PEEK",
                    ],
                  }),
                  (0, r.jsxs)("nav", {
                    className: "hidden md:flex space-x-6",
                    children: [
                      (0, r.jsx)("a", {
                        href: "#home",
                        className: "text-white hover:text-gray-300",
                        children: "home",
                      }),
                      (0, r.jsx)("a", {
                        href: "#about",
                        className: "text-white hover:text-gray-300",
                        children: "about",
                      }),
                      (0, r.jsx)("a", {
                        href: "#tokenomics",
                        className: "text-white hover:text-gray-300",
                        children: "tokenomics",
                      }),
                      (0, r.jsx)("a", {
                        href: "#roadmap",
                        className: "text-white hover:text-gray-300",
                        children: "roadmap",
                      }),
                      (0, r.jsx)("a", {
                        href: "#how-to-buy",
                        className: "text-white hover:text-gray-300",
                        children: "how to buy",
                      }),
                      (0, r.jsx)("a", {
                        href: "#chart",
                        className: "text-white hover:text-gray-300",
                        children: "chart",
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "hidden md:block",
                    children: (0, r.jsx)("a", {
                      href: o,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      children: (0, r.jsx)("button", {
                        className:
                          "bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full",
                        children: "BUY NOW",
                      }),
                    }),
                  }),
                  (0, r.jsx)(i, {}),
                ],
              }),
              (0, r.jsx)("main", { children: t }),
              (0, r.jsxs)("footer", {
                className: "text-center py-6 border-t border-white/20",
                children: [
                  (0, r.jsx)("div", {
                    className: "text-2xl font-bold mb-4",
                    children: "$PEEK",
                  }),
                  (0, r.jsxs)("div", {
                    className: "flex justify-center space-x-4 mb-4",
                    children: [
                      (0, r.jsx)("a", {
                        href: "https://x.com/Peek_dinosaur",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0, r.jsx)("img", {
                          src: "/twitter.png",
                          alt: "X Icon",
                          className: "h-6",
                        }),
                      }),
                      (0, r.jsx)("a", {
                        href: "https://t.me/Peek_dinosaur",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0, r.jsx)("img", {
                          src: "/telegram.png",
                          alt: "Telegram Icon",
                          className: "h-6",
                        }),
                      }),
                      (0, r.jsx)("a", {
                        href: "https://www.dextools.io/app/en/ether/pair-explorer/0x6927c51e1d97298c795ea79464e2ef32255737a9",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0, r.jsx)("img", {
                          src: "/dextools_logo.png",
                          alt: "Dextools Icon",
                          className: "h-6",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("p", {
                    className: "text-sm max-w-2xl mx-auto mb-4",
                    children:
                      "$PEEK pays homage to Dino Pictures of the Dino Film Dinosaur Adventure. This token is purely for entertainment purposes and should be considered a meme coin with no intrinsic value or expectation of financial return. There is no formal team, no roadmap, and no promises. The coin is 100% useless and exists purely for fun.",
                  }),
                  (0, r.jsx)("p", {
                    className: "text-sm",
                    children: "\xa9 2025 by $PEEK. All rights reserved.",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    9324: () => {},
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [520, 441, 684, 358], () => t(2020)), (_N_E = e.O());
  },
]);
