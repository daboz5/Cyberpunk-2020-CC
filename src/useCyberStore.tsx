import { create } from 'zustand';
import { BasicRole } from './types';

type State = {
    basicInfo: BasicRole
}

type Action = {
    setBasicInfo(newState: BasicRole): void,
}

const useCyberStore = create<State & Action>(set => ({

    basicInfo: {
        handle: "",
        age: 0,
        skills: [],
        role: "",
        roleSkill: "",
        roleInfo: "",
    },
    setBasicInfo: (newState) => set(() => ({
        basicInfo: newState
    })),

}))

export default useCyberStore;