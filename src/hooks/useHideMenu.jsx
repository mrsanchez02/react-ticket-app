import { useContext, useEffect } from "react"
import { UIContext } from "../context/UIContext"


export const useHideMenu = (hide) => {
  const {hideMenu, showMenu} = useContext(UIContext)

  useEffect(() => {
    if (hide) {
      hideMenu()
    }
    showMenu()
  }, [hide])
}
