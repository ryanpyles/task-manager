const themes = {
    light: {
      background: "#ffffff",
      primary: "#ff6600",
      text: "#000000",
      card: "#f5f5f5",
    },
    dark: {
      background: "#121212",
      primary: "#ff6600",
      text: "#ffffff",
      card: "#1e1e1e",
    },
  };
  
  export function getTheme(mode) {
    return themes[mode] || themes.light;
  }
  