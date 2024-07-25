"use strict";
class Accordion {
    _container;
    _tabs;
    _activeTab;
    constructor(accordion) {
        this._container = accordion;
        this._tabs = this._container.querySelectorAll('[data-accordion-tab]');
        this._activeTab = null;
        this.init();
    }
    init() {
        if (!this._tabs.length)
            return;
        const activeTabs = Array.from(this._tabs).filter(activeTab => activeTab.hasAttribute('data-accordion-tab-active'));
        if (activeTabs.length) {
            const lastActiveTab = activeTabs[activeTabs.length - 1];
            this.expand(lastActiveTab);
            this._activeTab = lastActiveTab;
        }
        this._tabs.forEach(tab => {
            const header = tab.querySelector('[data-accordion-header]');
            header?.addEventListener('click', () => this.toggle(tab));
        });
    }
    toggle(tab) {
        if (this._activeTab && this._activeTab !== tab) {
            this.collapse(this._activeTab);
        }
        const isActive = tab.classList.contains('_active');
        if (isActive) {
            this.collapse(tab);
            this._activeTab = null;
        }
        else {
            this.expand(tab);
            this._activeTab = tab;
        }
    }
    expand(tab) {
        tab.classList.add('_active');
        const header = tab.querySelector('[data-accordion-header]');
        const content = header?.nextElementSibling;
        header?.setAttribute('aria-expanded', String(true));
        content?.setAttribute('aria-hidden', String(false));
    }
    collapse(tab) {
        tab.classList.remove('_active');
        const header = tab.querySelector('[data-accordion-header]');
        const content = header?.nextElementSibling;
        header?.setAttribute('aria-expanded', String(false));
        content?.setAttribute('aria-hidden', String(true));
    }
}
const accordions = document.querySelectorAll('[data-accordion]');
if (accordions.length) {
    accordions.forEach(accordion => {
        new Accordion(accordion);
    });
}
//# sourceMappingURL=script.js.map