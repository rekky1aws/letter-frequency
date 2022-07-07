let lightTheme = true;

function switchTheme ()
{
	const styleLink = document.getElementById('style-link');

	const themeChangeImg = document.getElementById('theme-changer-img');

	if (lightTheme) {
		styleLink.href = "style/dark.css";
		themeChangeImg.src = "media/images/sun.png";
		lightTheme = false;
	} else {
		styleLink.href = "style/light.css";
		themeChangeImg.src = "media/images/moon.png";
		lightTheme = true;
	}
}