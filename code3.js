gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code = {};
gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.localVariables = [];
gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.idToCallbackMap = new Map();
gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GDNewTextObjects1= [];
gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GDNewTextObjects2= [];
gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects1= [];
gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects2= [];


gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "арена", false);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("счет_врагов2"), gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects1);
{for(var i = 0, len = gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects1.length ;i < len;++i) {
    gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects1[i].getBehavior("Text").setText("счет врагов " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GDNewTextObjects1.length = 0;
gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GDNewTextObjects2.length = 0;
gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects1.length = 0;
gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects2.length = 0;

gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.eventsList0(runtimeScene);
gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GDNewTextObjects1.length = 0;
gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GDNewTextObjects2.length = 0;
gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects1.length = 0;
gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code.GD_951089_951095_951077_951090_9595_951074_951088_951072_951075_951086_9510742Objects2.length = 0;


return;

}

gdjs['_1087_1088_1086_1080_1075_1088_1099_1096Code'] = gdjs._1087_1088_1086_1080_1075_1088_1099_1096Code;
