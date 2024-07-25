# Accordion

Simple and accessible accordion component with smooth animations using CSS grid. Accordions, in fact, are perfect for creating collapsible sections on your website, providing an intuitive and organized way to present information.

## Usage

##### Use the following HTML structure for your accordion:

```html
<div class="section-name__accordion accordion" data-accordion>
	<div class="accordion__tab" data-accordion-tab>
		<button id="section-name-title-01" type="button" class="accordion__header" aria-expanded="false"
			aria-controls="section-name-content-01" data-accordion-header>
			<span class="accordion__title">Accordion Tab</span>
			<!-- you can add your own icon -->
			<i class="accordion__icon fa-solid fa-chevron-down"></i>
		</button>
		<div id="section-name-content-01" class="accordion__content" role="region" aria-hidden="true"
			aria-labelledby="section-name-title-01">
			<div>
				<!-- your content goes here -->
			</div>
		</div>
	</div>
</div>
```

> ###### Make sure to replace `section-name` with your specific section name

##### If you want to make one of your accordion tabs opened by default, make sure you've added a special data-attribute `data-accordion-tab-active` to your accordion tab:

```html
<div class="section-name__accordion accordion" data-accordion>
	<div class="accordion__tab" data-accordion-tab data-accordion-tab-active>
		<!-- ... -->
	</div>
</div>
```

##### Initialize the accordion in your TypeScript file:
```ts
const accordions = document.querySelectorAll<HTMLElement>('[data-accordion]');

if (accordions.length) {
	accordions.forEach(accordion => {
		new Accordion(accordion);
	})
}
```