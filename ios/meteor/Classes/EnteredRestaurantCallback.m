//
//  EnteredRestaurantCallback.m
//  meteor
//
//  Created by Merrick Clark on 7/11/15.
//
//

#import <Foundation/Foundation.h>
#import "EnteredRestaurantCallback.h"
@import SenseSdk;
@interface EnteredRestaurantCallback ()
@end
@implementation EnteredRestaurantCallback
- (void)recipeFired:(RecipeFiredArgs*) args {
    
    // Your user has entered a restaurant!
    
    NSLog(@"Recipe %@ fired at %@.", [[args recipe] name], [args timestamp]);
    for (TriggerFiredArgs* trigger in [args triggersFired]) {
        for (NSObject <NSCoding, Place>* place in [trigger places]) {
            NSLog(@"%@", [place description]);
        }
    }
}
@end