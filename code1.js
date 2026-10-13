gdjs._1075_1072_1081_1076Code = {};
gdjs._1075_1072_1081_1076Code.localVariables = [];
gdjs._1075_1072_1081_1076Code.idToCallbackMap = new Map();
gdjs._1075_1072_1081_1076Code.GDNewTextObjects1= [];
gdjs._1075_1072_1081_1076Code.GDNewTextObjects2= [];
gdjs._1075_1072_1081_1076Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects1= [];
gdjs._1075_1072_1081_1076Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects2= [];


gdjs._1075_1072_1081_1076Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "арена", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "anthem-of-the-ussr-rock-version(1).mp3", true, 40, 1);
}
}

}


};

gdjs._1075_1072_1081_1076Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1075_1072_1081_1076Code.GDNewTextObjects1.length = 0;
gdjs._1075_1072_1081_1076Code.GDNewTextObjects2.length = 0;
gdjs._1075_1072_1081_1076Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects1.length = 0;
gdjs._1075_1072_1081_1076Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects2.length = 0;

gdjs._1075_1072_1081_1076Code.eventsList0(runtimeScene);
gdjs._1075_1072_1081_1076Code.GDNewTextObjects1.length = 0;
gdjs._1075_1072_1081_1076Code.GDNewTextObjects2.length = 0;
gdjs._1075_1072_1081_1076Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects1.length = 0;
gdjs._1075_1072_1081_1076Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects2.length = 0;


return;

}

gdjs['_1075_1072_1081_1076Code'] = gdjs._1075_1072_1081_1076Code;
