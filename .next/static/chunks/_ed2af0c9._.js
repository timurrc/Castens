(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_ed2af0c9._.js", {

"[project]/src/app/(student)/PK/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/components/heading.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Page() {
    _s();
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pullUps, setPullUps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hangingPullUps, setHangingPullUps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pushUps, setPushUps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [abs, setAbs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [longJump, setLongJump] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [forwardBend, setForwardBend] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            setUser(localStorage.getItem("user"));
            setPullUps(localStorage.getItem("Pull-ups"));
            setHangingPullUps(localStorage.getItem("Mark_HangingPull-ups"));
            setPushUps(localStorage.getItem("Mark_Push-ups"));
            setAbs(localStorage.getItem("Mark_ABS"));
            setLongJump(localStorage.getItem("Mark_longJump"));
            setForwardBend(localStorage.getItem("Mark_ForwardBend"));
        }
    }["Page.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                        children: user
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/PK/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/Crown.svg",
                        width: 16,
                        height: 16,
                        alt: "Crown",
                        className: "mt-1"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/PK/page.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(student)/PK/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"], {
                children: "Результаты"
            }, void 0, false, {
                fileName: "[project]/src/app/(student)/PK/page.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            pullUps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#F3F7F9] rounded-xl flex w-full justify-between items-center px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Подтягивания из виса лежа на высокой перекладине"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/PK/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: pullUps
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/PK/page.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(student)/PK/page.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this),
            hangingPullUps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#F3F7F9] rounded-xl flex w-full justify-between items-center px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Подтягивания в висе"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/PK/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: hangingPullUps
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/PK/page.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(student)/PK/page.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            pushUps && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#F3F7F9] rounded-xl flex w-full justify-between items-center px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Отжимания"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/PK/page.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: pushUps
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/PK/page.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(student)/PK/page.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this),
            abs && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#F3F7F9] rounded-xl flex w-full justify-between items-center px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Пресс"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/PK/page.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: abs
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/PK/page.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(student)/PK/page.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this),
            longJump && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#F3F7F9] rounded-xl flex w-full justify-between items-center px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Прыжок в длину с места"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/PK/page.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: longJump
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/PK/page.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(student)/PK/page.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            forwardBend && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-[#F3F7F9] rounded-xl flex w-full justify-between items-center px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Наклон вперед"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/PK/page.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: forwardBend
                    }, void 0, false, {
                        fileName: "[project]/src/app/(student)/PK/page.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(student)/PK/page.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(student)/PK/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Page, "3GlPaAHjgvSA9Cf4Rz0dD8TIb1s=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/props/high-contrast.prop.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "highContrastPropDef": (()=>o)
});
const o = {
    highContrast: {
        type: "boolean",
        className: "rt-high-contrast",
        default: void 0
    }
};
;
 //# sourceMappingURL=high-contrast.prop.js.map
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/props/leading-trim.prop.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "leadingTrimPropDef": (()=>r)
});
const e = [
    "normal",
    "start",
    "end",
    "both"
], r = {
    trim: {
        type: "enum",
        className: "rt-r-lt",
        values: e,
        responsive: !0
    }
};
;
 //# sourceMappingURL=leading-trim.prop.js.map
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/props/text-align.prop.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "textAlignPropDef": (()=>t)
});
const e = [
    "left",
    "center",
    "right"
], t = {
    align: {
        type: "enum",
        className: "rt-r-ta",
        values: e,
        responsive: !0
    }
};
;
 //# sourceMappingURL=text-align.prop.js.map
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/props/text-wrap.prop.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "textWrapPropDef": (()=>r)
});
const e = [
    "wrap",
    "nowrap",
    "pretty",
    "balance"
], r = {
    wrap: {
        type: "enum",
        className: "rt-r-tw",
        values: e,
        responsive: !0
    }
};
;
 //# sourceMappingURL=text-wrap.prop.js.map
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/props/truncate.prop.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "truncatePropDef": (()=>e)
});
const e = {
    truncate: {
        type: "boolean",
        className: "rt-truncate"
    }
};
;
 //# sourceMappingURL=truncate.prop.js.map
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/props/weight.prop.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "weightPropDef": (()=>t)
});
const e = [
    "light",
    "regular",
    "medium",
    "bold"
], t = {
    weight: {
        type: "enum",
        className: "rt-r-weight",
        values: e,
        responsive: !0
    }
};
;
 //# sourceMappingURL=weight.prop.js.map
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/components/heading.props.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "headingPropDefs": (()=>n)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$as$2d$child$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/props/as-child.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$color$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/props/color.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$high$2d$contrast$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/props/high-contrast.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$leading$2d$trim$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/props/leading-trim.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$text$2d$align$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/props/text-align.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$text$2d$wrap$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/props/text-wrap.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$truncate$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/props/truncate.prop.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$weight$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/props/weight.prop.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const m = [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
], a = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9"
], n = {
    as: {
        type: "enum",
        values: m,
        default: "h1"
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$as$2d$child$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asChildPropDef"],
    size: {
        type: "enum",
        className: "rt-r-size",
        values: a,
        default: "6",
        responsive: !0
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$weight$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["weightPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$text$2d$align$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textAlignPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$leading$2d$trim$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["leadingTrimPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$truncate$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["truncatePropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$text$2d$wrap$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textWrapPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$color$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["colorPropDef"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$high$2d$contrast$2e$prop$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["highContrastPropDef"]
};
;
 //# sourceMappingURL=heading.props.js.map
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/props/prop-def.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "breakpoints": (()=>e)
});
const e = [
    "initial",
    "xs",
    "sm",
    "md",
    "lg",
    "xl"
];
;
 //# sourceMappingURL=prop-def.js.map
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/helpers/has-own-property.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hasOwnProperty": (()=>e)
});
function e(n, r) {
    return Object.prototype.hasOwnProperty.call(n, r);
}
;
 //# sourceMappingURL=has-own-property.js.map
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/helpers/is-responsive-object.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "isResponsiveObject": (()=>i)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$prop$2d$def$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/props/prop-def.js [app-client] (ecmascript)");
;
function i(e) {
    return typeof e == "object" && Object.keys(e).some((s)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$prop$2d$def$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breakpoints"].includes(s));
}
;
 //# sourceMappingURL=is-responsive-object.js.map
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/helpers/get-responsive-styles.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getResponsiveClassNames": (()=>g),
    "getResponsiveCustomProperties": (()=>m),
    "getResponsiveStyles": (()=>R)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$prop$2d$def$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/props/prop-def.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$has$2d$own$2d$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/helpers/has-own-property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$is$2d$responsive$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/helpers/is-responsive-object.js [app-client] (ecmascript)");
;
;
;
function R({ className: r, customProperties: n, ...t }) {
    const p = g({
        allowArbitraryValues: !0,
        className: r,
        ...t
    }), e = m({
        customProperties: n,
        ...t
    });
    return [
        p,
        e
    ];
}
function g({ allowArbitraryValues: r, value: n, className: t, propValues: p, parseValue: e = (s)=>s }) {
    const s = [];
    if (n) {
        if (typeof n == "string" && p.includes(n)) return l(t, n, e);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$is$2d$responsive$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isResponsiveObject"])(n)) {
            const i = n;
            for(const o in i){
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$has$2d$own$2d$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwnProperty"])(i, o) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$prop$2d$def$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breakpoints"].includes(o)) continue;
                const u = i[o];
                if (u !== void 0) {
                    if (p.includes(u)) {
                        const f = l(t, u, e), v = o === "initial" ? f : `${o}:${f}`;
                        s.push(v);
                    } else if (r) {
                        const f = o === "initial" ? t : `${o}:${t}`;
                        s.push(f);
                    }
                }
            }
            return s.join(" ");
        }
        if (r) return t;
    }
}
function l(r, n, t) {
    const p = r ? "-" : "", e = t(n), s = e?.startsWith("-"), i = s ? "-" : "", o = s ? e?.substring(1) : e;
    return `${i}${r}${p}${o}`;
}
function m({ customProperties: r, value: n, propValues: t, parseValue: p = (e)=>e }) {
    let e = {};
    if (!(!n || typeof n == "string" && t.includes(n))) {
        if (typeof n == "string" && (e = Object.fromEntries(r.map((s)=>[
                s,
                n
            ]))), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$is$2d$responsive$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isResponsiveObject"])(n)) {
            const s = n;
            for(const i in s){
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$has$2d$own$2d$property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwnProperty"])(s, i) || !__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$prop$2d$def$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["breakpoints"].includes(i)) continue;
                const o = s[i];
                if (!t.includes(o)) for (const u of r)e = {
                    [i === "initial" ? u : `${u}-${i}`]: o,
                    ...e
                };
            }
        }
        for(const s in e){
            const i = e[s];
            i !== void 0 && (e[s] = p(i));
        }
        return e;
    }
}
;
 //# sourceMappingURL=get-responsive-styles.js.map
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/helpers/merge-styles.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mergeStyles": (()=>l)
});
function l(...t) {
    let e = {};
    for (const n of t)n && (e = {
        ...e,
        ...n
    });
    return Object.keys(e).length ? e : void 0;
}
;
 //# sourceMappingURL=merge-styles.js.map
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "extractProps": (()=>v)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$get$2d$responsive$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/helpers/get-responsive-styles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$is$2d$responsive$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/helpers/is-responsive-object.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$merge$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/helpers/merge-styles.js [app-client] (ecmascript)");
;
;
;
;
function N(...r) {
    return Object.assign({}, ...r);
}
function v(r, ...m) {
    let t, l;
    const a = {
        ...r
    }, f = N(...m);
    for(const n in f){
        let s = a[n];
        const e = f[n];
        if (e.default !== void 0 && s === void 0 && (s = e.default), e.type === "enum" && ![
            e.default,
            ...e.values
        ].includes(s) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$is$2d$responsive$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isResponsiveObject"])(s) && (s = e.default), a[n] = s, "className" in e && e.className) {
            delete a[n];
            const u = "responsive" in e;
            if (!s || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$is$2d$responsive$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isResponsiveObject"])(s) && !u) continue;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$is$2d$responsive$2d$object$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isResponsiveObject"])(s) && (e.default !== void 0 && s.initial === void 0 && (s.initial = e.default), e.type === "enum" && ([
                e.default,
                ...e.values
            ].includes(s.initial) || (s.initial = e.default))), e.type === "enum") {
                const i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$get$2d$responsive$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResponsiveClassNames"])({
                    allowArbitraryValues: !1,
                    value: s,
                    className: e.className,
                    propValues: e.values,
                    parseValue: e.parseValue
                });
                t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, i);
                continue;
            }
            if (e.type === "string" || e.type === "enum | string") {
                const i = e.type === "string" ? [] : e.values, [d, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$get$2d$responsive$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getResponsiveStyles"])({
                    className: e.className,
                    customProperties: e.customProperties,
                    propValues: i,
                    parseValue: e.parseValue,
                    value: s
                });
                l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$merge$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeStyles"])(l, y), t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, d);
                continue;
            }
            if (e.type === "boolean" && s) {
                t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, e.className);
                continue;
            }
        }
    }
    return a.className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(t, r.className), a.style = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$merge$2d$styles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeStyles"])(l, r.style), a;
}
;
 //# sourceMappingURL=extract-props.js.map
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/props/margin.props.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "marginPropDefs": (()=>r)
});
const e = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "-1",
    "-2",
    "-3",
    "-4",
    "-5",
    "-6",
    "-7",
    "-8",
    "-9"
], r = {
    m: {
        type: "enum | string",
        values: e,
        responsive: !0,
        className: "rt-r-m",
        customProperties: [
            "--m"
        ]
    },
    mx: {
        type: "enum | string",
        values: e,
        responsive: !0,
        className: "rt-r-mx",
        customProperties: [
            "--ml",
            "--mr"
        ]
    },
    my: {
        type: "enum | string",
        values: e,
        responsive: !0,
        className: "rt-r-my",
        customProperties: [
            "--mt",
            "--mb"
        ]
    },
    mt: {
        type: "enum | string",
        values: e,
        responsive: !0,
        className: "rt-r-mt",
        customProperties: [
            "--mt"
        ]
    },
    mr: {
        type: "enum | string",
        values: e,
        responsive: !0,
        className: "rt-r-mr",
        customProperties: [
            "--mr"
        ]
    },
    mb: {
        type: "enum | string",
        values: e,
        responsive: !0,
        className: "rt-r-mb",
        customProperties: [
            "--mb"
        ]
    },
    ml: {
        type: "enum | string",
        values: e,
        responsive: !0,
        className: "rt-r-ml",
        customProperties: [
            "--ml"
        ]
    }
};
;
 //# sourceMappingURL=margin.props.js.map
}}),
"[project]/node_modules/@radix-ui/themes/dist/esm/components/heading.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Heading": (()=>r)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/classnames/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript) <export * as Slot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/components/heading.props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/helpers/extract-props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$margin$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/themes/dist/esm/props/margin.props.js [app-client] (ecmascript)");
;
;
;
;
;
;
const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((p, t)=>{
    const { children: e, className: s, asChild: a, as: n = "h1", color: i, ...m } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$helpers$2f$extract$2d$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractProps"])(p, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$components$2f$heading$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["headingPropDefs"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$themes$2f$dist$2f$esm$2f$props$2f$margin$2e$props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["marginPropDefs"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Slot$3e$__["Slot"].Root, {
        "data-accent-color": i,
        ...m,
        ref: t,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$classnames$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("rt-Heading", s)
    }, a ? e : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(n, null, e));
});
r.displayName = "Heading";
;
 //# sourceMappingURL=heading.js.map
}}),
}]);

//# sourceMappingURL=_ed2af0c9._.js.map