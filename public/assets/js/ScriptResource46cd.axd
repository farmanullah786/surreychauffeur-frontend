// Name:        Seadragon.Seadragon.Config.debug.js
// Assembly:    AjaxControlToolkit
// Version:     3.5.7.1213
// FileVersion: 3.5.7.1213
// (c) 2010 CodePlex Foundation
Type.registerNamespace('Sys.Extended.UI.Seadragon');
Type.registerNamespace('Seadragon');
Sys.Extended.UI.Seadragon.Config = function() {

    this.debugMode = true;

    this.animationTime = 1.5;

    this.blendTime = 0.5;

    this.alwaysBlend = false;

    this.autoHideControls = true;

    this.immediateRender = false;

    this.wrapHorizontal = false;

    this.wrapVertical = false;

    this.minZoomDimension = 0.8;

    this.maxZoomPixelRatio = 2;

    this.visibilityRatio = 0.5;

    this.springStiffness = 5.0;

    this.imageLoaderLimit = 2;

    this.clickTimeThreshold = 200;

    this.clickDistThreshold = 5;

    this.zoomPerClick = 2.0;

    this.zoomPerSecond = 2.0;

    this.showNavigationControl = true;

    this.maxImageCacheCount = 100;

    this.minPixelRatio = 0.5;

    this.mouseNavEnabled = true;

    this.navImages = {
        zoomIn: {
            REST: 'WebResource.axd?d=G-NfxPJQpLWi0VENNHJi2AwKcP_s2b5ByoQHKicQfUEtBE06Hsec13tcNzZfzXx6z8x2SDUv9IIJZwtGZxrsxPRK6qsQu5o-ihhkiCh2yWzLzaGSgBFs00gRvJ8T8ZRn84Skjk0WJwzQ1OWwHwwJvw2&t=638182686170143817',
            GROUP: 'WebResource.axd?d=hxu-n3FhFxs5Kjq5IaD0N8f_nRHSboUeGMwYcmF-O8R5pRKKiah51O65_gxEG0cvlCkl4x9F9qMPLPlpN_M3tj6HKve25h-vLuLmlHbii7MJtNX-I2hI32KOT2obSJiS-OMm8hvg_RFUBSvJNBpyv4EpYs6sb1iqyWTISRhfmbI1&t=638182686170143817',
            HOVER: 'WebResource.axd?d=qjSJFpMDVQhlQlNLtjBpiIDs2UwxyaEt4xscOXozwyeWOfIyGDiRgw0MEox0agx8bMN3-cWNR6SoPlJ0V4tlI9jGVCpBod1G2Ufj2aN4fj6QqKEfjT7t_8OddM2ZbBu_g1M3t8pSO4yige3IdIUCcA2&t=638182686170143817',
            DOWN: 'WebResource.axd?d=HBWh4agiChnOTrTCv1etFDGkYu_GliRbDod2gbR9slSs4ewbQH4fKdRirrvha8VDMI2Wh829gLMBHyznYP6n29NZ4eZYyefWDgN0IOefKB99hEXWDUdWU5BF6sITSzczHv8l_g_QokU0Cpew6Yg4Kw2&t=638182686170143817'
        },
        zoomOut: {
            REST: 'WebResource.axd?d=-dajJlTVHTJgP5paJj4OhcMn97s6IR26-6gG_riLSMPwG4OOKS33zLv1TFHppWrLkmoUW2HD3OZvKkTvj8nQYp43o4FrlxisZI5kzgLKjXQye-a7W5vtFFee2UcH1aAlaOteQTAVbp1j8XFVh34DJA2&t=638182686170143817',
            GROUP: 'WebResource.axd?d=UlSn3FrdMVRQjXXBv7H6GDOSddz25g-Jv94iTaXzWQGZ91n1PY7A_k8uW4x6-oX_3sOXgDqGjFeFveDKr9LcjK86fW_-N1Uv26OnXlZtdru-kSnmz8jLTpmlcAALMFd4-oCs43JDXYsk_DRCqPGHUr4bXASvTK0972mIwkNx-0s1&t=638182686170143817',
            HOVER: 'WebResource.axd?d=gY2zEE7AX3uH5Xta0q2h5BYLGm_z3rZSScDWSOvMXhkp2TpQfK15lgyee6JVABQfYOjvHn3yJSZTUlgWb9DVni-hDIZEnyn1uuFEAstIU2ovs9sE9SO4wdypJIcmJlR7oY9QT8pwQ_obNgpwwjnDxA2&t=638182686170143817',
            DOWN: 'WebResource.axd?d=CjfAGyxwO3WY9lMlhQqK4Jpjvc0b3oG3rGkno84C8TtDIxdk-b5lfwm0NluP13tdlFo8UbO8mOPjb3a4W57j_CHoYAqHuf_HLe-v-xfhxKaOGDrsXJzK-9-HrYtvb7uCMXtIKhQaAUP_mtHWbj2Lv3xepU2LjNsmtyYETHRYg-Y1&t=638182686170143817'
        },
        home: {
            REST: 'WebResource.axd?d=9tts5Xv2tQ0Gmq86YjEqzYnpJjIKwXTBEkg2DbGBTzhwjCPi-ExXiv2SNn0PQhy88VVPJJkkM7nUi78EQYg1PvXfM4cDLueEHVgcePV1YeRobpbA1JWgYDRorEMBFmgCJ7TNzZOD4EKwfOqsd-C2aQ2&t=638182686170143817',
            GROUP: 'WebResource.axd?d=3LdgIt-cRucDLkZeHX0d3k-RZEIlQljdhbIWoeGT9diIcWEPrHua9yd_Bkk-BZf5wMnBst4Rvo6aUPhz9h4DrBk9L5FPqvfI0sDdS5yWmh5pqGXEZDAQ1AHMKlAvGDv_riD59I9yWQdXbCrrNx7Nam3ruH-KoHDfTFu2vaxzleM1&t=638182686170143817',
            HOVER: 'WebResource.axd?d=Xj4sIfV4MLTtosnOsjCuHzVRiUH14pztzEdBJYVbrp2lOD6moWPfyZNpENkOC0bo8n0lW-yD-zonY73CtcoH1eug6h2oPEsZYNXA_G5xY8USCkwf6wqGoXB3NTT1e3H0B3GuHR7lK9u4qNLPFsYYAA2&t=638182686170143817',
            DOWN: 'WebResource.axd?d=7uRS5XZ6miUJXgmDYmj7B2Ud1FOMPKDYvX0eoEZaYut9_8ygR-oUknaZjXtBVn43jaZ2s5r_kHb4ut6FSU5UG9z63818DjeaJP_yrB2_bmyNMfID06fmuhlGto5CfEamMOpCO_xJgqssaSQVuLOqvw2&t=638182686170143817'
        },
        fullpage: {
            REST: 'WebResource.axd?d=MLuwEj-zBbCNFf4UIFk9RynV-LCzojoHOlshcTP63VdTfBYtwU0j1YL-zw8cPsaj7ax4tPE9d_6opyfiPW_LyGbHly8DZBQXcQ6NMEgdVb99khhFiHiHS3eZIQH1fn25Mg9uU48uAkDZl8dzITcZtA2&t=638182686170143817',
            GROUP: 'WebResource.axd?d=-aCxGVZ0uJQuWOv5Allq6uX8kvR9-WhOPCO4sSOe-_u2pMnF6osIbnZyuw3G_31AePrjJzjQRPB-OdgrcImGar-aX9bzfhtE2cKo2xucrreeuBkhMx7KcnpxK_xH2vUu9YJiCGcFUJhuEg8uq8h2aDJc0U909VFGxBuURqLh1_E1&t=638182686170143817',
            HOVER: 'WebResource.axd?d=8V9grIb59co89YFvHb0SrFb69L3_nAQZCGJZZmRobMzHoR6Ktzj70ihMtZMUZP7q-9cPlYcGm1jCROVqifgSG3S2bWfeLJx8-v9PaRJ1Zyy8iRcb3_obOc1WjLIx9yCemPHZs4s2NJAxBWpYCsWrIQ2&t=638182686170143817',
            DOWN: 'WebResource.axd?d=LoNcY56vrvZHuTARWB1R3v9WOQsA59JLckzPuZhRjmpnwwG0aY7qkqYhtnnnK4pciWsOxdqhc8nnXP3Ae-pQik-VgbZWmuE86uS9Y0-HmmaJ3KFYRUDQvE72MKhSouzh-VIDvXUMlZB1LtGSaNwG1ijNlT4Nmvmpq9Qc0-MzY481&t=638182686170143817'
        }
    };
};
Sys.Extended.UI.Seadragon.Config.registerClass('Sys.Extended.UI.Seadragon.Config', null, Sys.IDisposable);
