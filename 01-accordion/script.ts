class Accordion {
	protected readonly _container;
	protected readonly _tabs;
	protected _activeTab: HTMLElement | null;

	constructor(accordion: HTMLElement) {
		this._container = accordion;
		this._tabs = this._container.querySelectorAll<HTMLElement>('[data-accordion-tab]');
		this._activeTab = null;
		this.init();
	}

	public init(): void {
		if (!this._tabs.length) return;

		const activeTabs = Array.from(this._tabs).filter(activeTab => activeTab.hasAttribute('data-accordion-tab-active'));

		if (activeTabs.length) {
			const lastActiveTab = activeTabs[activeTabs.length - 1];
			this.expand(lastActiveTab);
			this._activeTab = lastActiveTab;
		}

		this._tabs.forEach(tab => {
			const header = tab.querySelector<HTMLElement>('[data-accordion-header]');
			header?.addEventListener('click', () => this.toggle(tab));
		});
	}

	public toggle(tab: HTMLElement): void {
		if (this._activeTab && this._activeTab !== tab) {
			this.collapse(this._activeTab);
		}

		const isActive = tab.classList.contains('_active');

		if (isActive) {
			this.collapse(tab);
			this._activeTab = null;
		} else {
			this.expand(tab);
			this._activeTab = tab;
		}
	}

	public expand(tab: HTMLElement): void {
		tab.classList.add('_active');
		const header = tab.querySelector<HTMLElement>('[data-accordion-header]');
		const content = header?.nextElementSibling as HTMLElement | null;
		header?.setAttribute('aria-expanded', String(true));
		content?.setAttribute('aria-hidden', String(false));
	}

	public collapse(tab: HTMLElement): void {
		tab.classList.remove('_active');
		const header = tab.querySelector<HTMLElement>('[data-accordion-header]');
		const content = header?.nextElementSibling as HTMLElement | null;
		header?.setAttribute('aria-expanded', String(false));
		content?.setAttribute('aria-hidden', String(true));
	}
}

const accordions = document.querySelectorAll<HTMLElement>('[data-accordion]');

if (accordions.length) {
	accordions.forEach(accordion => {
		new Accordion(accordion);
	})
}