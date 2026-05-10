type Theme = {
    ClassName: string,
    DisplayName: string,
    DisplayNameEng: string,
    DisplayImage?: string,
    MainAccent?: string,
}
type ThemeGroup = {
    Name: string,
    DisplayName: string,
    DisplayNameEng: string,
    Themes: Theme[],
}

export const Themes: ThemeGroup[] = [
    {
        Name: "light",
        DisplayName: "Giao diện sáng",
        DisplayNameEng: "Light interfaces",
        Themes: [
            {
                ClassName: "default-light",
                DisplayName: "Appta sáng",
                DisplayNameEng: "Default light",
                MainAccent: "#58C4F5",
            },
            {
                ClassName: "neutral-light",
                DisplayName: "Trung tính sáng",
                DisplayNameEng: "Neutral light",
                MainAccent: "#70707b",
            },
            {
                ClassName: "nord-light",
                DisplayName: "Cực bắc sáng",
                DisplayNameEng: "Nord light",
                MainAccent: "#88C0D0",
            },
        ]
    },
    {
        Name: "dark",
        DisplayName: "Giao diện tối",
        DisplayNameEng: "Dark interfaces",
        Themes: [
            {
                ClassName: "default-dark",
                DisplayName: "Appta tối",
                DisplayNameEng: "Default dark",
                MainAccent: "#23598E",
            },
            {
                ClassName: "neutral-dark",
                DisplayName: "Trung tính tối",
                DisplayNameEng: "Neutral dark",
                MainAccent: "#26262A",
            },
            {
                ClassName: "nord-dark",
                DisplayName: "Cực bắc tối",
                DisplayNameEng: "Nord dark",
                MainAccent: "#4C566A",
            },
        ]
    },
    {
        Name: "feng-shui",
        DisplayName: "Phong thủy",
        DisplayNameEng: "Fengshui Sets",
        Themes: [
            {
                ClassName: "fengshui-kim",
                DisplayName: "Mệnh Kim",
                DisplayNameEng: "Metal",
                MainAccent: "#dfa30a",
            },
            {
                ClassName: "fengshui-moc",
                DisplayName: "Mệnh Mộc",
                DisplayNameEng: "Wood",
                MainAccent: "#89c014",
            },
            {
                ClassName: "fengshui-thuy",
                DisplayName: "Mệnh Thủy",
                DisplayNameEng: "Water",
                MainAccent: "#0E93D3",
            },
            {
                ClassName: "fengshui-hoa",
                DisplayName: "Mệnh Hỏa",
                DisplayNameEng: "Fire",
                MainAccent: "#FF6B3E",
            },
            {
                ClassName: "fengshui-tho",
                DisplayName: "Mệnh Thổ",
                DisplayNameEng: "Earth",
                MainAccent: "#A26D4B",
            },
        ]
    },
]