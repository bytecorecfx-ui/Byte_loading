/**
 * Loadscreen content — แก้ไฟล์นี้เท่านั้น (รายการไม่จำกัดจำนวน)
 * โหลดก่อน script.js ผ่าน window.LOADSCREEN_CONFIG
 */
window.LOADSCREEN_CONFIG = {
  updates: {
    headlineIcon: "fa-solid fa-code-compare",
    headline: "updates",
    disc: "new features and improvements!",
    /** แต่ละ section = หัวข้อ + รายการอัปเดต — มีรูปเท่านั้นใส่ image: "path" ไม่มีก็ไม่ต้องใส่ key */
    sections: [
      {
        heading: "New features!",
        items: [
          {
            text: "Faster asset loading with staged file checks.",
            image: "img/logo.svg",
          },
          {
            text: "Progress bar gradient tuned to the theme.",
          },
        ],
      },
      {
        heading: "Improvements",
        items: [
          {
            text: "Example: text-only — omit the image property when no screenshot.",
          },
                    {
            text: "Example: text-only — omit the image property when no screenshot.",
          },
        ],
      },
    ],
  },

  rules: {
    headlineIcon: "fa-solid fa-scale-balanced",
    headline: "rules",
    disc: "Server rules and fair play.",
    /** ข้อความทีละบรรทัด — ใส่กี่บรรทัดก็ได้ */
    items: [
      "Respect players and staff at all times.",
      "No cheating, exploiting, or griefing.",
      "Follow roleplay context when applicable.",
    ],
  },

  keyboards: {
    headlineIcon: "fa-solid fa-keyboard",
    headline: "keyboards",
    disc: "Default bindings (customize in-game).",
    tableHeaders: {
      action: "Action",
      key: "Key",
    },
    /** แต่ละแถว = การกระทำ + ปุ่ม — ใส่กี่แถวก็ได้ */
    rows: [
      { action: "Move forward", key: "W" },
      { action: "Inventory", key: "Tab" },
      { action: "Voice push-to-talk", key: "N" },
    ],
  },
};
