module Mathematics where
-- import Data.Array (fromFoldable) as A
import Data.List (List(..), (:),fromFoldable) as L
import Prelude (min, otherwise, (<),(-),(<=))

mini :: Array Int -> Int
mini xs = mini' (L.fromFoldable xs)

mini' :: L.List Int -> Int
mini' L.Nil = 0
mini' (x L.: xs) = _min x (x L.: xs)
  where 
    _min :: Int ->  L.List Int -> Int
    _min m L.Nil = m
    _min m (x L.: xs) = _min (min m x) xs


closest :: Int -> Array Int -> Int
closest n xs = closest' n (L.fromFoldable xs)


closest' :: Int -> L.List Int -> Int
closest' n L.Nil = n
closest' n (x L.: xs) = _closest gapHead n x xs 
  where 
    gapHead = abs' (n - x)
    _closest :: Int -> Int -> Int -> L.List Int -> Int
    _closest _ _ chosen L.Nil = chosen
    _closest gap n chosen (y L.: ys)
      | gap <= abs' (n - y) = _closest gap n chosen ys
      | otherwise = _closest (abs' (n - y)) n y ys

abs' :: Int -> Int
abs' a 
  | a < 0 =  0 - a
  | otherwise = a