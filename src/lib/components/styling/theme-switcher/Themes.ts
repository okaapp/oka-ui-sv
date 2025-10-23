type Theme = {
    ClassName: string,
    DisplayName: string,
    DisplayImage?: string,
    MainAccent?: string,
}
type ThemeGroup = {
    Name: string,
    DisplayName: string,
    Themes: Theme[],
}

export const Themes: ThemeGroup[] = [
    {
        Name: "light",
        DisplayName: "Giao diện sáng",
        Themes: [
            {
                ClassName: "default-light",
                DisplayName: "Appta sáng",
                MainAccent: "#58C4F5",
            },
            {
                ClassName: "neutral-light",
                DisplayName: "Trung tính sáng",
                MainAccent: "#70707b",
            },
            {
                ClassName: "nord-light",
                DisplayName: "Cực bắc sáng",
                MainAccent: "#88C0D0",
            },
        ]
    },
    {
        Name: "dark",
        DisplayName: "Giao diện tối",
        Themes: [
            {
                ClassName: "default-dark",
                DisplayName: "Appta tối",
                MainAccent: "#23598E",
            },
            {
                ClassName: "neutral-dark",
                DisplayName: "Trung tính tối",
                MainAccent: "#26262A",
            },
            {
                ClassName: "nord-dark",
                DisplayName: "Cực bắc tối",
                MainAccent: "#4C566A",
            },
        ]
    },
    {
        Name: "feng-shui",
        DisplayName: "Phong thủy",
        Themes: [
            {
                ClassName: "fengshui-kim",
                DisplayName: "Mệnh Kim",
                MainAccent: "#dfa30a",
            },
            {
                ClassName: "fengshui-moc",
                DisplayName: "Mệnh Mộc",
                MainAccent: "#89c014",
            },
            {
                ClassName: "fengshui-thuy",
                DisplayName: "Mệnh Thủy",
                MainAccent: "#0E93D3",
            },
            {
                ClassName: "fengshui-hoa",
                DisplayName: "Mệnh Hỏa",
                MainAccent: "#FF6B3E",
            },
            {
                ClassName: "fengshui-tho",
                DisplayName: "Mệnh Thổ",
                MainAccent: "#A26D4B",
            },
        ]
    },
]