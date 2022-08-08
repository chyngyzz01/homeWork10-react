import './App.css'
import Header from './Headers/Header'
import MyContext from './store/ChangeColor-context'
import { useContext, useState } from 'react'
import styled from 'styled-components'

function App() {

	const [divColor, setDivColor] = useState(false)

	return (
		<>
			<MyContext.Provider value={{ divColor, setDivColor }}>
				<Div divColor={divColor}>
					<Header />
          <H3>Hey this is my 10 HomeWork Switch</H3>
				</Div>
			</MyContext.Provider>
		</>
	)
}

export default App

const Div = styled.div`
	background-color: ${(props) => (props.divColor ? 'black' : 'white')};
	height: 100vh;
	width: 100%;
`
const H3 = styled.h3`
text-align: center;
margin: 50px;
color: grey;
`