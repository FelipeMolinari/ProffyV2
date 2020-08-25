import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  font-size: 60%;
  --color-secundary: #8257E5;
  --color-secundary-dark: #885BF0;
  --color-primary: #04D361;
  --color-primary-dark: #08C15C;
  --commum-background: #F9F9F9;
  --commum-input: #FAFAFC;
  --commum-input-text: #9C98A6;
  --commum-border: #E6E6F0;
  --commum-text: #707070;
  --commum-disabled: #DCDCE5;
  --commum-facebook: #5280E0;
  --commum-facebook-dark: #2256C1;

}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html,
body,
#root {
	height: 100vh;
}



#root {
	display: flex;
	align-items: center;
	justify-content: center;
}

body,
input,
textarea {
	font: 500 1.6rem Poppins;
}
a, button{
	font: 500 1.6rem Archivo;

}

.container {
	width: 80%;
	max-width: 900px;
	align-items:center;
	justify-content:center;
  display:flex;
  background:"#388";
	
}

@media (min-width: 700px) {
	:root {
		font-size: 62.5%;
	}
}

`;
