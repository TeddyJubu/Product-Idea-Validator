# ICE Score Calculator

A minimal, elegant ICE Score Calculator built with Material Design 3 principles to help prioritize product ideas and features.

## 🚀 Live Demo

**[Try it now: https://ice-calculator.lindy.site](https://ice-calculator.lindy.site)**

## 📊 What is ICE?

ICE is a prioritization framework that helps you evaluate ideas based on three key dimensions:

- **Impact**: How much value will this create if it works? (1-10)
- - **Confidence**: How sure are you about the Impact estimate? (1-100%)
  - - **Effort**: Time and complexity required to deliver? (1-10)
   
    - ### Formula
    - ```
      ICE Score = (Impact × Confidence) ÷ Effort
      ```

      Higher scores indicate better opportunities to prioritize first.

      ## ✨ Features

      - **Live Score Preview**: See ICE scores calculated in real-time as you type
      - - **Automatic Ranking**: Ideas are automatically sorted by score (highest first)
        - - **Material Design 3**: Clean, modern interface with smooth animations
          - - **Responsive Design**: Works perfectly on desktop, tablet, and mobile
            - - **Idea Management**: Add, view, and remove ideas with ease
              - - **Color-coded Scores**: Visual indicators for high, medium, and low priority ideas
               
                - ## 🛠️ Tech Stack
               
                - - **Framework**: Next.js 15 with React 19
                  - - **Styling**: Tailwind CSS with shadcn/ui components
                    - - **Animations**: Framer Motion for smooth transitions
                      - - **Icons**: Lucide React
                        - - **TypeScript**: Full type safety
                          - - **Package Manager**: Bun
                           
                            - ## 🏃‍♂️ Getting Started
                           
                            - 1. **Clone the repository**
                              2.    ```bash
                                       git clone https://github.com/TeddyJubu/Product-Idea-Validator.git
                                       cd Product-Idea-Validator
                                       ```

                                    2. **Install dependencies**
                                    3.    ```bash
                                             bun install
                                             ```

                                          3. **Run the development server**
                                          4.    ```bash
                                                   bun dev
                                                   ```

                                                4. **Open your browser**
                                                5.    Navigate to [http://localhost:3000](http://localhost:3000)
                                            
                                                6.## 📖 How to Use

                                            1. **Enter your idea name** in the text field
                                            2. 2. **Rate the Impact** (1-10): How much value will this create?
                                               3. 3. **Set your Confidence** (1-100%): How sure are you about the impact?
                                                  4. 4. **Estimate the Effort** (1-10): How much time/complexity is required?
                                                     5. 5. **See the live preview** of your ICE score
                                                        6. 6. **Click "Add Idea"** to add it to your ranked list
                                                           7. 7. **Compare and prioritize** based on th
