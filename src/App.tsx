import type { ReactElement } from 'react';

export function App(): ReactElement {
	return (
		<div className="h-screen overflow-hidden bg-primary flex flex-col flex-1">
			<header className="flex items-center justify-center w-full shadow-md">
				<nav className="container flex items-center justify-between py-4">
					<img
						src="/logo.png"
						className="w-20 h-20 pointer-events-none"
					/>

					<ul className="flex gap-4 text-secondary">
						<li>
							<a href="#">HOME</a>
						</li>
						<li>
							<a href="#">CURSOS</a>
						</li>
						<li>
							<a href="#">BLOG</a>
						</li>
					</ul>
				</nav>
			</header>

			<section className="flex flex-col gap-4 flex-1 items-center justify-center relative">
				<div className="flex flex-col items-center z-10">
					<img
						src="/logo.png"
						className="w-40 h-40 pointer-events-none animate-bounce"
					/>
					<h1 className="text-secondary uppercase font-semibold text-lg">
						Em construção...
					</h1>
				</div>

				<video
					id="background-video"
					autoPlay
					loop
					muted
					className="absolute top-0 left-0 w-full h-full object-cover z-0"
					// poster="https://assets.codepen.io/6093409/river.jpg"
				>
					<source
						src="/hero-video-bg.mp4"
						type="video/mp4"
					/>
				</video>
			</section>
		</div>
	);
}
