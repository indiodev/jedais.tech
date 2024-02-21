import type { ReactElement } from 'react';

export function App(): ReactElement {
	return (
		<div className="h-screen overflow-hidden bg-primary">
			<header className="flex items-center justify-center w-full">
				<nav className="container flex items-center justify-between py-4">
					<img src="/default-logo.png" />

					<ul className="flex gap-4 text-secondary">
						<li>
							<a href="#">Inicio</a>
						</li>
						<li>
							<a href="#">Blog</a>
						</li>
						<li>
							<a href="#">Link 3</a>
						</li>
					</ul>
				</nav>
			</header>

			<section className="flex flex-1 h-full border items-center justify-center">
				<h1 className="text-secondary">Em construção...</h1>
			</section>
		</div>
	);
}
