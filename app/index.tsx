import { Button, ButtonText } from "@/components/ui/button";
import { Center } from "@/components/ui/center";
import { router } from "expo-router";

export default function Index() {
  return (
    <Center className="h-[200px] w-full">
      <Button
        size="md"
        variant="solid"
        action="primary"
        onPress={() => {
          router.push("/(tabs)/home");
        }}
      >
        <ButtonText>Hello World!</ButtonText>
      </Button>
    </Center>
  );
}
