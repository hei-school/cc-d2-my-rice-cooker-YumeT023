package tui

import core.RiceCooker

object MenuManager {
    fun generateMenu(rc: RiceCooker): ArrayList<String> {
        val menu = ArrayList<String>()
        when {
            rc.isLidOpen -> {
                if (rc.isFoodReadyToServe) {
                    addReadyToServeCook(menu)
                } else {
                    addPlaceFoodAndWater(menu)
                }
            }

            else -> {
                addPlugUnplug(menu)
                val isReadyToCook = rc.isPlugged && rc.riceCup > 0 && rc.waterCup > 0
                if (isReadyToCook) {
                    menu.add("Begin cooking")
                }
            }
        }
        if (!rc.isPlugged) {
            addOpenCloseLid(menu)
        }
        menu.add("Done")
        return menu
    }

    private fun addReadyToServeCook(menu: ArrayList<String>) {
        menu.add("Get the ready-to-serve cook")
    }

    private fun addPlaceFoodAndWater(menu: ArrayList<String>) {
        menu.addAll(sequenceOf("Place raw food in the inner pot", "Add water"))
    }

    private fun addPlugUnplug(menu: ArrayList<String>) {
        menu.addAll(sequenceOf("Plug", "Unplug"))
    }

    private fun addOpenCloseLid(menu: ArrayList<String>) {
        menu.addAll(sequenceOf("Open lid", "Close lid"))
    }
}
