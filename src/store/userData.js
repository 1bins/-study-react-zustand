import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
/*
  Devtools 사용법
  import { devtools } from 'zustand/middleware'
  create( devtools ( persist() ) )으로 감싼다.
 */

const dataStore = create(
    persist(
        (set) => ({
          count: 1,
          addCount: () => set((state) => ({ count: state.count + 1 })),
        }),
        {
          name: 'count-storage', // 로컬 스토리지에 저장될 키 이름
          storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export { dataStore };