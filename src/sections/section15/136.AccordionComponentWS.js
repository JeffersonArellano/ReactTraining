import React from 'react'
import './136.Accordion.css'
import Accordion from '../../components/136.Accordion'

const AccordionComponentWS = () => {

    return (
        <div>
            <Accordion
                title='Accordion Example 1 '
                content='Lorem ipsum...'
                bgColor='#000' />
            <Accordion
                title='Accordion Example 2'
                content='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' />
            <Accordion
                title='Accordion Example 3'
                content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
                bgColor='orangered' />
        </div>
    )
}

export default AccordionComponentWS