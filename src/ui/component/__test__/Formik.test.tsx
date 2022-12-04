// import { fireEvent, render, screen, waitFor } from "@testing-library/react"
// import { MyForm } from "../MyForm"
// import userEvent from '@testing-library/user-event'



// test("test formik email input",async()=>{
//     render(<MyForm initialValues={undefined}/>);

//     // const formDomRender = screen.getAllByTestId("form");
//     const emailInput = screen.getByPlaceholderText('Email')

//     userEvent.type(emailInput, 'invalidemail.com')
//     fireEvent.blur(emailInput)
    
//     await waitFor(() => {
//       expect(screen.getByText(/Invalid/i)).toBeInTheDocument()
// })
// })

// test("test formik firstName input",async()=>{
//     render(<MyForm initialValues={undefined}/>);

//     // const formDomRender = screen.getAllByTestId("form");
//     const TextInput = screen.getByPlaceholderText('firstName')

//     userEvent.type(TextInput, '')
//     fireEvent.blur(TextInput)
    
//     await waitFor(() => {
//       expect(screen.getByText(/Required/i)).toBeInTheDocument()
// })
// })

// myForm.test.js
import React from 'react'
import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MyForm } from '../MyForm'


test('rendering and submitting a basic Formik form', async () => {
  const handleSubmit = jest.fn()
  render(<MyForm onSubmit={handleSubmit}  />)
  const user = userEvent.setup()

  await user.type(screen.getByLabelText(/first name/i), 'John')
  await user.type(screen.getByLabelText(/last name/i), 'Dee')
  await user.type(screen.getByLabelText(/Email/i), 'john.dee@someemail.com')

  await user.click(screen.getByRole('button', {name: /submit/i}))

  await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'john.dee@someemail.com',
      firstName: 'John',
      lastName: 'Dee',
    }),
  )
})