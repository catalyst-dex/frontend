type FooterProps = {
	className?: string;
};

function Footer(props: FooterProps) {
	return (
		<footer
			className={`flex justify-between items-center   text-white ${props.className} `}>
			<div className='flex items-center gap-3 text-sm text-gray-500'>
				<p>Terms and conditions</p>
				<p>Github</p>
				<p>Twitter</p>
			</div>
			<div className='text-gray-500 text-sm'>
				© 2024 catalyst, ALL RIGHTS RESERVED
			</div>
		</footer>
	);
}
export default Footer;
