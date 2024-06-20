import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Text,
} from "@react-email/components";

export const EmailTemplate = ({ message }) => {
    return (
        <Html>
            <Head />
            <Preview>Thank you for joining our newsletter</Preview>
            <Body className="bg-black text-white">
                <Container className="m-auto p-3">
                    <Heading className="text-2xl my-2">
                        tapaScript Newsletter
                    </Heading>
                    <Text className="text-xl mx-2 my-2">{message}</Text>
                </Container>
            </Body>
        </Html>
    );
};
