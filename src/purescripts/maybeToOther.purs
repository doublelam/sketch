module MabeConvert where
-- import Prelude
import Data.Maybe
-- import Data.Array

maybeArr :: forall a. Maybe (Array a) -> Array a
maybeArr (Just a) = a
maybeArr Nothing = []

maybeInt :: Maybe Int -> Int
maybeInt (Just a) = a
maybeInt Nothing = 0
