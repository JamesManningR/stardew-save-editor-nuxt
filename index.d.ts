export type LocationType = {
  X: Number
  Y: Number
}

export type SizeType = {
  X: Number
  Y: Number
}

export enum QuestType {
  Fetch
}

export type Quest = {
  _currentObjective: String
  _questDescription: String
  _questTitle: String
  rewardDescription: String
  accepted: Boolean
  completed: Boolean
  dailyQuest: Boolean
  showNew: Boolean
  canBeCancelled: Boolean
  destroy: Boolean
  id: Number
  moneyReward: Number
  questType: QuestType
  daysLeft: Number
  dayQuestAccepted: Number
  nextQuests: Boolean
  questTitle: String
}

export enum Emotes {
  Example
}


export enum Profession {
  Example
}

export enum ExperiencePoint {
  Example
}

export enum ItemCategory {
  Example
}

export enum ItemQuality {
  Normal,
  Silver,
  Gold,
  Irridium
}

export type ItemBoundingBox = {
  X: Number
  Y: Number
  Width: Number
  Height: Number
  Location: LocationType
  Size: SizeType
}

export type Item = {
  isLostItem: Boolean
  category: Boolean
  hasBeenInInventory: Boolean
  name: Boolean
  parentSheetIndex: Boolean
  specialItem: Boolean
  SpecialVariable: Boolean
  DisplayName: Boolean
  Name: Boolean
  Stack: Boolean
  titleLocation: LocationType
  owner: Number
  type: String
  canBeSetDown: Boolean
  canBeGrabbed: Boolean
  isHoedirt: Boolean
  isSpawnedObject: Boolean
  questItem: Boolean
  questId: Number
  isOn: Boolean
  fragility: Number
  price: Number
  edibility: Boolean
  stack: Boolean
  quality: ItemQuality
  bigCraftable: Boolean
  setOutdoors: Boolean
  setIndoors: Boolean
  readyForHarvest: Boolean
  showNextIndex: Boolean
  flipped: Boolean
  hasBeenPickedUpByFarmer: Boolean
  isRecipe: Boolean
  isLamp: Boolean
  minutesUntilReady: Number
  boindingBox: ItemBoundingBoxType
  scale: SizeType
  uses: Number
  preservedParentSheetIndex: Number
  destroyOvernight: Boolean
}

export type Player = {
  name: String
  forceOneTileWide: Boolean
  isEmoting: Boolean
  isCharging: Boolean
  isGlowing: Boolean
  colouredBorder: Boolean
  flip: Boolean
  drawOnTop: Boolean
  faceTowardFarmer: Boolean
  ignoreMovementAnimation: Boolean
  faceAwayFromFarmer: Boolean
  scale: Number
  timeBeforeAIMovementAgain: number
  glowingTransparency: Boolean
  glowRate: Number
  willDestroyObjectsUnderfoot: Boolean
  Position: LocationType
  Speed: Number
  FacingDirection: Number
  IsEmoting: Boolean
  CurrentEmote: Emotes
  Scale: Number
  questLog: Quest[]
  professions: Profession[]
  experiencePoints: ExperiencePoint[]
}
