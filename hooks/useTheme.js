import { useContext } from "react";
import { ThemeContext } from "../components/ui/DarkTheme/theme.context";

export function useTheme() {
    return useContext(ThemeContext);
}
