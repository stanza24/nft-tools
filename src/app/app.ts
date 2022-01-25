import TokenParser from "../modules/tokenParser";

class App {
  /**
   * Parse tokens from file
   * @param inputPath Path to the file with input data for parser
   * @param outputPath Path where parser will throw the result token list
   */
  parseTokens(inputPath?: string, outputPath?: string) {
    return TokenParser.getTokens(inputPath, outputPath)
  }
}

const app = new App();
export default app;