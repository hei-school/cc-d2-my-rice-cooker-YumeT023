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

    fun info(message: String) = printlnWithFlag(INFO, message)

    fun error(message: String) = printlnWithFlag(ERROR, message)

    fun warning(message: String) = printlnWithFlag(WARNING, message)

    fun dangerous(message: String) = printlnWithFlag(DANGEROUS, message)

    fun recommendation(message: String) = printlnWithFlag(RECOMMENDATION, message)
}
