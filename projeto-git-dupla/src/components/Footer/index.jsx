import './style.css';

function Footer() {
	return (
		<footer className="footer-container">
			<div className="footer-inner">
				<p>© {new Date().getFullYear()} Contabilidade Online — Todos os direitos reservados.</p>
			</div>
		</footer>
	);
}

export default Footer;
