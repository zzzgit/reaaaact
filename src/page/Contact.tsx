import Button from '@mui/material/Button'


export const Contact = ():JSX.Element => {
	return (
		<div>
			<h1>Contact Page</h1>
			<Button variant="contained" onClick={() => {
				alert('clicked')
			}}>Hello World</Button>
		</div>
	)
}
