module MabeConvert where
-- import Prelude
import Data.Maybe
-- import Data.Array

maybeArr :: Maybe (Array Int) -> Array Int
maybeArr (Just a) = a
maybeArr Nothing = []
