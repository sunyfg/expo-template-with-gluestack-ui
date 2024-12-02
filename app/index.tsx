import { Text, View } from "react-native";
import { Box } from "@/components/ui/box";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className="bg-primary-500 p-5">
        <Text className="text-typography-0">This is the Box</Text>
      </Box>
    </View>
  );
}
