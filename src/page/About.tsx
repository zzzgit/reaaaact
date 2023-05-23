import {css} from "@emotion/react"


const styles = css`
	foo:{
		  padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: red;
      }
	}
    `

export const About = ():JSX.Element => {
	return (
		<div css={ {styles} }>
			<h1>About Page</h1>
		</div>
	)
}

