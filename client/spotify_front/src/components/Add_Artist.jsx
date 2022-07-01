

import React from 'react'

import {Container, Wrapper, Title, Form, Input,Button,TextArea} from '../style/Add_Artist_Styled'


const Add_Artist = () => {
  return (
    <>
    <Container>
    <Wrapper>
    <Title>
        Add Artist
    </Title>
    <Form>
        <Input type="text" placeholder="Artist Name" />
        <Input type="date" placeholder="Artist DOB" />
        <TextArea placeholder="Artist Bio" />
        <Button>Save</Button>
    </Form>
    </Wrapper>
    </Container>

        

    </>
  )
}

export default Add_Artist
