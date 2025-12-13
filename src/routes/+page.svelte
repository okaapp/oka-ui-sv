<script lang="ts">
    import Button from "$lib/components/core/button/Button.svelte";
    import Avatar from "$lib/components/core/avatar/Avatar.svelte";
    import ThemeSwitcher from "$lib/components/styling/theme-switcher/ThemeSwitcher.svelte";
    import Badge from "$lib/components/core/badge/Badge.svelte";
    import EngineOrb from "$lib/components/aaengine-set/engine-orb/EngineOrb.svelte";
    import CaretRight from "phosphor-svelte/lib/CaretRight";
</script>

<div class="landing">
    <!-- Hero Section -->
    <section class="hero">
        <div class="hero__content">
            <div class="hero__badge">
                <Badge color="indigo" size="lg">v0.4.2</Badge>
            </div>

            <h1 class="hero__title display-font">
                Build beautiful apps with OKA UI
            </h1>

            <p class="hero__description">
                A comprehensive Svelte UI component library for the Appta
                software platform by the OKA Tech team.
            </p>

            <div style="display: flex; margin-left: 16px;">
                <Avatar
                    src="https://avatars.githubusercontent.com/u/81915970?v=4"
                    size="xl"
                    alt="User 1"
                    style="margin-left: -16px; border: 2px solid var(--surface-secondary);"
                />
                <Avatar
                    src="https://avatars.githubusercontent.com/u/87857683?v=4"
                    size="xl"
                    alt="User 1"
                    style="margin-left: -16px; border: 2px solid var(--surface-secondary);"
                />
                <Avatar
                    src="https://avatars.githubusercontent.com/u/121375913?v=4"
                    size="xl"
                    alt="User 2"
                    style="margin-left: -16px; border: 2px solid var(--surface-secondary);"
                />
            </div>

            <div class="hero__actions">
                <Button
                    variant="primary"
                    size="lg"
                    onclick={() =>
                        (window.location.href = "/docs/installation")}
                >
                    Get Started
                    <CaretRight />
                </Button>
                <Button
                    variant="tertiary"
                    size="lg"
                    onclick={() => (window.location.href = "/docs")}
                >
                    View Docs
                </Button>
            </div>
        </div>

        <div class="hero__visual">
            <div class="hero__orb">
                <EngineOrb />
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer__content">
            <div class="footer__left">
                <span class="footer__copy">© 2025 OKA Tech. MIT License.</span>
            </div>
            <div class="footer__right"></div>
        </div>
    </footer>
</div>

<style>
    .landing {
        min-height: 100vh;
    }

    /* Hero Section */
    .hero {
        max-width: 1200px;
        margin: 0 auto;
        padding: 120px 24px 80px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 64px;
        align-items: center;
        min-height: 80vh;
        height: 100%;
    }

    .hero__content {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .hero__badge {
        display: flex;
    }

    .hero__title {
        font-size: 64px;
        line-height: 1.1;
        margin: 0;
        color: var(--content-primary);
        font-family: "DM Serif Display";
        margin: 0;
        font-weight: 500;
        line-height: 1;
    }

    .hero__description {
        font-size: 20px;
        line-height: 1.6;
        color: var(--content-secondary);
        margin: 0;
    }

    .hero__actions {
        display: flex;
        gap: 16px;
        margin-top: 16px;
    }

    .hero__visual {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 64px;
    }

    .hero__orb {
        transform: scale(8);
    }

    .footer {
        max-width: 1200px;
        margin: 64px auto 0 auto;
        padding: 48px 24px;
    }

    .footer__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer__left {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .footer__copy {
        font-size: 14px;
        color: var(--content-tertiary);
    }

    /* Responsive */
    @media (max-width: 768px) {
        .hero {
            grid-template-columns: 1fr;
            padding: 80px 24px 60px;
            gap: 48px;
        }

        .hero__title {
            font-size: 48px;
        }

        .hero__visual {
            padding: 48px;
        }

        .hero__orb {
            transform: scale(3);
        }

        .footer__content {
            flex-direction: column;
            gap: 24px;
            text-align: center;
        }
    }
</style>
