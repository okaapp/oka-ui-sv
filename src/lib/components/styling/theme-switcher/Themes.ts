type Theme = {
    ID: number,
    ClassName: string,
    DisplayName: string,
    DisplayImage?: string,
}
type ThemeGroup = {
    ID: number,
    Name: string,
    DisplayName: string,
    Themes: Theme[],
}

export const Themes: ThemeGroup[] = [
    {
        ID: 0,
        Name: "light",
        DisplayName: "Giao diện sáng",
        Themes: [
            {
                ID: 0,
                ClassName: "default-light",
                DisplayName: "Appta sáng"
            },
            {
                ID: 1,
                ClassName: "neutral-light",
                DisplayName: "Trung tính sáng"
            },
        ]
    },
    {
        ID: 1,
        Name: "dark",
        DisplayName: "Giao diện tối",
        Themes: [
            {
                ID: 0,
                ClassName: "default-dark",
                DisplayName: "Appta tối"
            },
            {
                ID: 1,
                ClassName: "neutral-dark",
                DisplayName: "Trung tính tối"
            },
        ]
    },
]