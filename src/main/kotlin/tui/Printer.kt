package tui

import tui.Printer.PrintFlag.*

object Printer {
    enum class PrintFlag {
        ERROR,
        WARNING,
        DANGEROUS,
        RECOMMENDATION,
        INFO
    }

    private fun printlnWithFlag(flag: PrintFlag, message: String) {
        print("[$flag] $message")
    }

    fun logo() {
        println("""
                    _________ _        _______  _                   _______  _______  _______  _        _______  _______ 
|\     /|\__   __/( \      (  ___  )( (    /||\     /|  (  ____ \(  ___  )(  ___  )| \    /\(  ____ \(  ____ )
| )   ( |   ) (   | (      | (   ) ||  \  ( |( \   / )  | (    \/| (   ) || (   ) ||  \  / /| (    \/| (    )|
| |   | |   | |   | |      | (___) ||   \ | | \ (_) /   | |      | |   | || |   | ||  (_/ / | (__    | (____)|
( (   ) )   | |   | |      |  ___  || (\ \) |  \   /    | |      | |   | || |   | ||   _ (  |  __)   |     __)
 \ \_/ /    | |   | |      | (   ) || | \   |   ) (     | |      | |   | || |   | ||  ( \ \ | (      | (\ (   
  \   /  ___) (___| (____/\| )   ( || )  \  |   | |     | (____/\| (___) || (___) ||  /  \ \| (____/\| ) \ \__
   \_/   \_______/(_______/|/     \||/    )_)   \_/     (_______/(_______)(_______)|_/    \/(_______/|/   \__/
                                                                                                               
        """.trimIndent())
    }

    fun info(message: String) = printlnWithFlag(INFO, message)

    fun error(message: String) = printlnWithFlag(ERROR, message)

    fun warning(message: String) = printlnWithFlag(WARNING, message)

    fun dangerous(message: String) = printlnWithFlag(DANGEROUS, message)

    fun recommendation(message: String) = printlnWithFlag(RECOMMENDATION, message)
}
