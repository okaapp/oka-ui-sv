import type { IconComponentProps } from "phosphor-svelte"
import type { Component } from "svelte"

export type SidebarItem = {
    Label: string,
    Route?: string,
    Icon?: Component<IconComponentProps, {}, "">,
}