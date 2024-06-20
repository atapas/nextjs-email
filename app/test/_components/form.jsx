import { Button } from "@/components/ui/button";

const AForm = ({createInvoice}) => {
    return (
        <form action={createInvoice}>
            <input type="hidden" name="customerId" value="001" />
            <input type="number" name="amount" />
            <Button type="submit">Create Invoice</Button>
        </form>
    );
};

export default AForm;
