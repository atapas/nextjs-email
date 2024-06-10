import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Subscribers = () => {
    return (
        <div className="flex flex-col justify-center items-center my-4">
            <Card>
                <CardHeader>
                    <CardTitle>Subscription Added</CardTitle>
                    <CardDescription>Please check your email</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Wow!! Tapas Adhikary Subscribed.</p>
                </CardContent>
                <CardFooter>
                    <p>Last Subscription at: {new Date().toTimeString()}</p>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Subscribers;
