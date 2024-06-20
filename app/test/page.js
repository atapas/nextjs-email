import { Button } from '@/components/ui/button'
import AForm from './_components/form'

import CourseComment from '@/components/add-post'

const TestPage = () => {

  async function createInvoice(formData) {
    'use server'

    const payload = {
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
    }

    console.log(payload);

    // mutate collection in db
    // send email.
  }

  return (
    <>
      <AForm createInvoice={createInvoice} />
      {/*<form action={createInvoice} className="m-4">
        <input type="hidden" name="customerId" value="001" />
        <input className="border-black border mx-2 rounded" type="number" name="amount" />
        <Button type="submit">Create Invoice</Button>
      </form>*/}

      <CourseComment postId="P001"/>
    </>
  )
}

export default TestPage