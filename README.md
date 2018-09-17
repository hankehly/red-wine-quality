# red-wine-quality

This is a repository for practicing regression modeling using red-wine quality data found on [kaggle](https://www.kaggle.com/uciml/red-wine-quality-cortez-et-al-2009).

1. Frame the problem and look at the big picture.
2. Get the data.
3. Explore the data to gain insights.
4. Prepare the data to better expose the underlying data patterns to Machine Learn‐ ing algorithms.
5. Explore many different models and short-list the best ones.
6. Fine-tune your models and combine them into a great solution.
7. Present your solution.
8. Launch, monitor, and maintain your system.

## Frame the Problem and Look at the Big Picture

1. Define the objective in business terms.
    - Predict the general quality of red variants of the Portuguese "Vinho Verde" wine (the sae type of wine used in the dataset).
2. How will your solution be used?
    - Solution is for educational purposes.
3. What are the current solutions/workarounds (if any)?
    - Unknown
4. How should you frame this problem (supervised/unsupervised, online/offline, etc.)?
    - Supervised / offline (batch)
5. How should performance be measured?
    - Root Mean Square Error (RMSE)
    - _A typical performance measure for regression problems is the Root Mean Square Error (RMSE). It measures the standard deviation4 of the errors the system makes in its predictions. For example, an RMSE equal to 50,000 means that about 68% of the system’s predictions fall within $50,000 of the actual value, and about 95% of the predictions fall within $100,000 of the actual value._
6. Is the performance measure aligned with the business objective?
    - Yes
7. What would be the minimum performance needed to reach the business objective?
    - Because the range in quality is from 1 to 10, a standard deviation of 1 or 2 ticks would be acceptable.
8. What are comparable problems? Can you reuse experience or tools?
    - Some code from chapter 2 of [handson-ml](https://github.com/ageron/handson-ml/blob/master/02_end_to_end_machine_learning_project.ipynb) is reused here.
9. Is human expertise available?
    - No
10. How would you solve the problem manually?
    - Drink labeled wines and try to guess myself
    - Ask someone with experience in wine tasting
11. List the assumptions you (or others) have made so far.
    - Overly sweet or acidic wines are not considered good quality.
12. Verify assumptions if possible.
    - Meh..

## Get the Data

1. List the data you need and how much you need.
2. Find and document where you can get that data.
3. Check how much space it will take.
4. Check legal obligations, and get authorization if necessary.
5. Get access authorizations.
6. Create a workspace (with enough storage space).
7. Get the data.
8. Convert the data to a format you can easily manipulate (without changing the data itself).
9. Ensure sensitive information is deleted or protected (e.g., anonymized).
10. Check the size and type of data (time series, sample, geographical, etc.).
11. Sample a test set, put it aside, and never look at it (no data snooping!).

---
_P. Cortez, A. Cerdeira, F. Almeida, T. Matos and J. Reis. Modeling wine preferences by data mining from physicochemical properties. In Decision Support Systems, Elsevier, 47(4):547-553, 2009._
