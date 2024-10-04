'use client';

function UserBold({styles}: {styles: string}) {
	return (
		<>
			<svg
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={styles}
			>
				<rect
					x="4.5"
					y="1"
					width="17"
					height="17"
					rx="5.5"
					stroke="#E20F00"
				/>
				<rect y="3.5" width="18" height="18" rx="6" fill="#E20F00" />
				<path
					d="M9 13.5C10.3807 13.5 11.5 12.3807 11.5 11C11.5 9.61929 10.3807 8.5 9 8.5C7.61929 8.5 6.5 9.61929 6.5 11C6.5 12.3807 7.61929 13.5 9 13.5ZM9 13.5C6.79086 13.5 5 14.8431 5 16.5M9 13.5C11.2091 13.5 13 14.8431 13 16.5"
					stroke="white"
					stroke-linecap="round"
				/>
			</svg>
		</>
	);
}

export default UserBold;
