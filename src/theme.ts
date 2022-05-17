import { useToggle, useDark } from "@vueuse/core";

export const isDark = useDark();
export const toggleColorScheme = useToggle(isDark);
